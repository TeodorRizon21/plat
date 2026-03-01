export function toCsv(headers: string[], rows: (string | number | null)[][]) {
  const escape = (val: string | number | null) => {
    const str = val === null ? "" : String(val);
    if (/[",\n]/.test(str)) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const csvRows = [
    headers.map(escape).join(","),
    ...rows.map((row) => row.map(escape).join(",")),
  ];

  return csvRows.join("\n");
}





