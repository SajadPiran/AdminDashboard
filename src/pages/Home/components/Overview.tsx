import Dropdown , {type DropdownItem} from "../../../components/Dropdown.tsx";
import ReactECharts from "echarts-for-react";
import useTheme from "../../../hooks/useTheme.tsx";

function Overview(){

    const [theme] = useTheme();
    const dropdownItems : Array<DropdownItem> = [
        { title : 'Today' },
        { title : 'Last 3 day' },
        { title : 'Last 7 day' }
    ];
    const option = {
        backgroundColor: "transparent",
        grid: {
            left: 10,
            right: 10,
            top: 20,
            bottom: 0,
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
            backgroundColor: 'dark' === theme ? '#fff' : "#000",
            borderWidth: 0,
            padding: [10, 14],
            textStyle: {
                color: 'dark' === theme ? '#000' : "#fff",
                fontSize: 14,
            },
            formatter: (params) => {
                const value = params[0].value.toLocaleString();
                if('dark' === theme){
                    return `
                      <div style="font-weight:600;color:#000">Earning</div>
                      <div style="margin-top:4px;color:#000">$${value}.00</div>
                    `;
                }
                return `
                  <div style="font-weight:600;color: #fff">Earning</div>
                  <div style="margin-top:4px;color: #fff">$${value}.00</div>
                `;
            },
            axisPointer: {
                type: "none",
            },
        },

        xAxis: {
            type: "category",
            data: ["Apr", "May", "Jun", "July", "Aug", "Sep"],
            boundaryGap: false,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: "#999",
                fontSize: 12,
            }
        },

        yAxis: {
            type: "value",
            min: 0,
            max: 100000,
            interval: 25000,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: "#999",
                formatter: (v : never) => (v === 0 ? "$0" : `${v / 1000}k`),
            },
            splitLine: {
                lineStyle: {
                    color: 'dark' === theme ? '#282828FF' : "#E2E2E2FF",
                    type: "dashed",
                },
            },
        },

        series: [
            {
                type: "line",
                data: [0, 52480, 0, 26000, 88000, 12000],
                smooth: true,
                symbol: "circle",
                symbolSize: 10,
                showSymbol: true,

                lineStyle: {
                    width: 4,
                    color: "#0aa24a",
                },

                itemStyle: {
                    color: "#0aa24a",
                    borderColor: "#0aa24a",
                    borderWidth: 0,
                },

                areaStyle: {
                    color: {
                        type: "linear",
                        x: 10,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: "rgba(10,162,74,0.35)" },
                            { offset: 1, color: "rgba(10,162,74,0.05)" },
                        ],
                    },
                },
            },
        ],
    };

    return (
        <section className="w-full flex flex-col gap-4 bg-white dark:bg-surface-2 p-6 md:px-8 rounded-4xl">

            <header className="w-full flex items-center justify-between gap-18">
                <h2 className="text-[20px] font-semibold dark:text-white">Overview</h2>
                <Dropdown items={dropdownItems}/>
            </header>

            <div className="w-full flex p-2 bg-[rgba(249,249,249,1)] dark:bg-[rgba(16,16,16,0.5)] border-2 border-[rgba(123,123,123,0.1)] rounded-4xl">
                <div className="w-1/2 flex flex-col gap-4 p-4 xl:p-8 rounded-3xl overview--active">
                    <div className="w-full flex items-center gap-2">
                        <svg className="w-6 h-6"><use href="#users"></use></svg>
                        <h3 className="text-sm font-bold dark:text-white">Customers</h3>
                    </div>
                    <div className="w-full flex flex-col md:items-end md:flex-row gap-2">
                        <p className="font-medium text-5xl dark:text-white">1,293</p>
                        <div className="w-full flex flex-col gap-2">
                            <div className="decrease">
                                <svg className="w-4 h-4"><use href="#arrow-2"></use></svg>
                                <data value="36.8" className="text-sm font-semibold">36.8%</data>
                            </div>
                            <small className="text-xs text-teritary">vs last month</small>
                        </div>

                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-4 p-4 xl:p-8 rounded-3xl">
                    <div className="w-full flex items-center gap-2">
                        <svg className="w-6 h-6"><use href="#shop"></use></svg>
                        <h3 className="text-sm font-bold text-text-secondary dark:text-white">Balance</h3>
                    </div>
                    <div className="w-full flex flex-col md:items-end md:flex-row gap-2">
                        <p className="font-medium text-5xl dark:text-white">256k</p>
                        <div className="w-full flex flex-col gap-2">
                            <div className="increase">
                                <svg className="w-4 h-4"><use href="#arrow-2"></use></svg>
                                <data value="36.8" className="text-sm font-semibold">36.8%</data>
                            </div>
                            <small className="text-xs text-teritary">vs last month</small>
                        </div>
                    </div>
                </div>
            </div>

            <ReactECharts
                option={option}
                style={{ height: 350, width: "100%" , marginTop : 16 }}
            />
        </section>
    )
}
export default Overview;