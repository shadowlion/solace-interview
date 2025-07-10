import { advocateData } from "@/db/seed/advocates";

export type Advocate = (typeof advocateData)[number];
