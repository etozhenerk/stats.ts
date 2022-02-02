import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");

matchReader.load();

const analyzer = new WinsAnalysis("Man United");
const report = new ConsoleReport();
const summary = new Summary(analyzer, report);

summary.buildAndPrintReport(matchReader.matches);

const summeryHtml = Summary.WinsAnalysisWithHtmlReport("Tottenham");
summeryHtml.buildAndPrintReport(matchReader.matches);
