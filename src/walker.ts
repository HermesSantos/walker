import { walkerAtt } from "./steps/walkerAtt.js";
import { printLogo } from "./helpers/logoPrinter.js";
import dotenv from 'dotenv';

dotenv.config()

printLogo();
walkerAtt();
