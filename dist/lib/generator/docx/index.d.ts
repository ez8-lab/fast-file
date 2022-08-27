import DataType from "../../../types/data";
import { Response } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
declare const docxGenerator: (columns: ColsGenerated, dataArray: DataType, res: Response, filename?: string) => Promise<void>;
export default docxGenerator;
