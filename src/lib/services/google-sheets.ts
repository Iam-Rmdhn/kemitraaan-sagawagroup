import { google } from "googleapis";
import { createHash } from "node:crypto";

export type SheetRevenueRecord = {
  revenueDate: string;
  revenue: number;
  transactions: number | null;
  raw: Record<string, string>;
  sourceRowHash: string;
};

type ReadSheetOptions = {
  spreadsheetId: string;
  sheetName: string;
  dateColumn: string;
  revenueColumn: string;
  transactionColumn?: string | null;
};

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function readRevenueSheet(options: ReadSheetOptions): Promise<SheetRevenueRecord[]> {
  const sheets = getSheetsClient();
  if (!sheets) {
    return [];
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: options.spreadsheetId,
    range: options.sheetName,
  });
  const rows = response.data.values ?? [];
  const [headers, ...body] = rows;

  if (!headers) return [];

  const headerIndex = new Map(headers.map((header, index) => [String(header), index]));
  const dateIndex = headerIndex.get(options.dateColumn);
  const revenueIndex = headerIndex.get(options.revenueColumn);
  const transactionIndex = options.transactionColumn
    ? headerIndex.get(options.transactionColumn)
    : undefined;

  if (dateIndex === undefined || revenueIndex === undefined) {
    throw new Error("Kolom tanggal atau omset tidak ditemukan di Google Sheet.");
  }

  return body
    .filter((row) => row[dateIndex] && row[revenueIndex])
    .map((row) => {
      const raw = Object.fromEntries(headers.map((header, index) => [String(header), String(row[index] ?? "")]));
      const hash = createHash("sha256").update(JSON.stringify(raw)).digest("hex");

      return {
        revenueDate: String(row[dateIndex]),
        revenue: parseCurrency(row[revenueIndex]),
        transactions: transactionIndex === undefined ? null : Number(row[transactionIndex] ?? 0),
        raw,
        sourceRowHash: hash,
      };
    });
}

function parseCurrency(value: unknown) {
  const normalized = String(value ?? "").replace(/[^\d-]/g, "");
  return Number(normalized || 0);
}
