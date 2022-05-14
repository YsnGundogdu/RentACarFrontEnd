import { ResponseModel } from "./responseModel";
import { Segment } from "./segment";

export interface SegmentResponseModel extends ResponseModel{
  data:Segment[]
}
