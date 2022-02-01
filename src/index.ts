import { CsvfileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const csvFileReader = new CsvfileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);

matchReader.load();
