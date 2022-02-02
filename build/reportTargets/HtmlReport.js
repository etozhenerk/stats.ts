"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    print(report) {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Analysis Output</title>
            </head>
            <body>
                <div>
                    <h1>Analysis Output</h1>
                    <div>${report}</div>
                </div>
            </body>
        </html>
        `;
        fs_1.default.writeFileSync("report.html", html);
    }
}
exports.HtmlReport = HtmlReport;
