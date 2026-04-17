/**
 * Export consultations data to Excel format
 * Uses CSV format which opens in Excel
 */
export const exportToExcel = (consultations) => {
  if (!consultations || consultations.length === 0) {
    alert("No data to export");
    return;
  }

  // Define CSV headers
  const headers = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Preferred Date",
    "Message",
    "Status",
    "Created At",
  ];

  // Convert data to CSV format
  const csvData = consultations.map((consultation) => {
    const createdAt = consultation.createdAt
      ? new Date(consultation.createdAt.seconds * 1000).toLocaleString()
      : "N/A";

    return [
      consultation.id || "",
      consultation.name || "",
      consultation.email || "",
      consultation.phone || "",
      consultation.preferredDate || "",
      (consultation.message || "").replace(/"/g, '""'), // Escape quotes
      consultation.status || "",
      createdAt,
    ];
  });

  // Combine headers and data
  const csvContent = [
    headers.join(","),
    ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(",")),
  ].join("\n");

  // Create blob and download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `consultations_${new Date().toISOString().split("T")[0]}.csv`,
  );
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
