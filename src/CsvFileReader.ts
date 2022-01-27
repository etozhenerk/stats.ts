import fs from "fs";
import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";

export class CsvfileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: "utf-8",
            })
            .split("\n")
            .map((row: string): string[] => row.split(","))
            .map((row: string[]): any => [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6],
            ]);
    }
}