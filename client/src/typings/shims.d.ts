/**
 * Created by omeroz on 7/3/2017.
 */
/**
 * this is a workaround for allowing access to UMD globals from modules
 https://github.com/Microsoft/TypeScript/issues/10178
 */
import * as _HighCharts from "@types/highcharts";
declare global {
	const Highcharts: typeof _HighCharts;
}