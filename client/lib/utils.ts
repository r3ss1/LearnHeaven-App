import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";
import { api } from "../state/api";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert cents to formatted currency string (e.g., 4999 -> "$49.99")
export function formatPrice(cents: number | undefined): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((cents || 0) / 100);
}

// Convert dollars to cents (e.g., "49.99" -> 4999)
export function dollarsToCents(dollars: string | number): number {
  const amount = typeof dollars === "string" ? parseFloat(dollars) : dollars;
  return Math.round(amount * 100);
}

// Convert cents to dollars (e.g., 4999 -> "49.99")
export function centsToDollars(cents: number | undefined): string {
  return ((cents || 0) / 100).toString();
}

// Zod schema for price input (converts dollar input to cents)
export const priceSchema = z.string().transform((val) => {
  const dollars = parseFloat(val);
  if (isNaN(dollars)) return "0";
  return dollarsToCents(dollars).toString();
});

export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor-Leste)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const customStyles = "text-gray-300 placeholder:text-gray-500";

export function convertToSubCurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export const NAVBAR_HEIGHT = 48;

export const courseCategories = [
  { value: "technology", label: "Technology" },
  { value: "science", label: "Science" },
  { value: "mathematics", label: "Mathematics" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
] as const;

export const customDataGridStyles = {
  border: "none",
  backgroundColor: "#17181D",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#1B1C22",
    color: "#6e6e6e",
    "& [role='row'] > *": {
      backgroundColor: "#1B1C22 !important",
      border: "none !important",
    },
  },
  "& .MuiDataGrid-cell": {
    color: "#6e6e6e",
    border: "none !important",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "#17181D",
    "&:hover": {
      backgroundColor: "#25262F",
    },
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#17181D",
    color: "#6e6e6e",
    border: "none !important",
  },
  "& .MuiDataGrid-filler": {
    border: "none !important",
    backgroundColor: "#17181D !important",
    borderTop: "none !important",
    "& div": {
      borderTop: "none !important",
    },
  },
  "& .MuiTablePagination-root": {
    color: "#6e6e6e",
  },
  "& .MuiTablePagination-actions .MuiIconButton-root": {
    color: "#6e6e6e",
  },
};

export const createCourseFormData = (
  data: CourseFormData,
  sections: Section[]
): FormData => {
  const formData = new FormData();
  formData.append("title", data.courseTitle);
  formData.append("description", data.courseDescription);
  formData.append("category", data.courseCategory);
  formData.append("price", data.coursePrice.toString());
  formData.append("status", data.courseStatus ? "Published" : "Draft");

  const sectionsWithVideos = sections.map((section) => ({
    ...section,
    chapters: section.chapters.map((chapter) => ({
      ...chapter,
      video: chapter.video,
    })),
  }));

  formData.append("sections", JSON.stringify(sectionsWithVideos));

  return formData;
};

export const uploadAllVideos = async (
  localSections: Section[],
  courseId: string,
  getUploadVideoUrl: any
) => {
  const updatedSections = localSections.map((section) => ({
    ...section,
    chapters: section.chapters.map((chapter) => ({
      ...chapter,
    })),
  }));

  for (let i = 0; i < updatedSections.length; i++) {
    for (let j = 0; j < updatedSections[i].chapters.length; j++) {
      const chapter = updatedSections[i].chapters[j];
      if (chapter.video instanceof File && chapter.video.type === "video/mp4") {
        try {
          const updatedChapter = await uploadVideo(
            chapter,
            courseId,
            updatedSections[i].sectionId,
            getUploadVideoUrl
          );
          updatedSections[i].chapters[j] = updatedChapter;
        } catch (error) {
          console.error(
            `Failed to upload video for chapter ${chapter.chapterId}:`,
            error
          );
        }
      }
    }
  }

  return updatedSections;
};

async function uploadVideo(
  chapter: Chapter,
  courseId: string,
  sectionId: string,
  getUploadVideoUrl: any
) {
  const file = chapter.video as File;

  try {
    const { uploadUrl, videoUrl } = await getUploadVideoUrl({
      courseId,
      sectionId,
      chapterId: chapter.chapterId,
      fileName: file.name,
      fileType: file.type,
    }).unwrap();

    await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });
    toast.success(
      `Video uploaded successfully for chapter ${chapter.chapterId}`
    );

    return { ...chapter, video: videoUrl };
  } catch (error) {
    console.error(
      `Failed to upload video for chapter ${chapter.chapterId}:`,
      error
    );
    throw error;
  }
}
