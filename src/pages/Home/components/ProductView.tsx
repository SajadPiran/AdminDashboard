import Dropdown , {type DropdownItem} from "../../../components/Dropdown.tsx";
import ReactECharts from "echarts-for-react";

function ProductView(){

    const dropdownItems : Array<DropdownItem> = [
        { title : 'Last 7 day' },
        { title : 'Last 3 day' },
        { title : 'Today' }
    ];
    const data = [1_000_000, 1_300_000, 800_000, 1_500_000, 1_150_000, 800_000, 1_400_000];
    const labels = [14, 15, 16, 17, 18, 19, 20];

    const option = {
        grid: {
            left: 0,
            right: 0,
            top: 40,
            bottom: 0,
        },
        xAxis: {
            type: "category",
            data: labels,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { color: "#999" }
        },
        yAxis: {
            type: 'value',
            show : false
        },
        tooltip: {
            show: false
        },
        series: [
            {
                data: data,
                type: 'bar',
                barWidth: '80%',
                itemStyle: {
                    color: "rgba(123, 123, 123, 0.4)",
                    borderRadius: 4,
                },
                emphasis: {
                    itemStyle: {
                        color: 'rgba(0, 181, 18, 1)'
                    },
                    label: {
                        show: true,
                        position: "top",
                        formatter: (params) => {
                            const value = params.value.toLocaleString().replace(/,/g, '');
                            return `${value[0]}.${value[1]}m`;
                        },
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: [4, 8],
                        borderRadius: 6,
                        distance: 10
                    }
                },
                label: {
                    show: false,
                }

            },
            {
                type: "scatter",
                coordinateSystem: "cartesian2d",
                z: 2,
                symbol: "circle",
                symbolSize: 10,
                itemStyle: {
                    color: "#00c853",
                    opacity: 0
                },
                emphasis: {
                    itemStyle: {
                        opacity: 1
                    }
                },
            }
        ]
    };

    return (
        <section className="w-full flex flex-col gap-8 bg-white dark:bg-surface-2 p-6 md:px-8 rounded-4xl">

            <header className="w-full flex items-center justify-between gap-18">
                <h2 className="text-[20px] font-semibold dark:text-white">Product view</h2>
                <Dropdown items={dropdownItems}/>
            </header>

            <div className="w-full flex flex-col lg:flex-row items-center lg:items-end lg:justify-between gap-5 lg:gap-16">

                <div className="w-full lg:w-fit flex items-end md:flex-row gap-4">

                    <p className="font-medium text-6xl dark:text-white"><span className="text-teritary">$</span>256k</p>
                    <div className="w-full flex flex-col gap-2">
                        <div className="increase">
                            <svg className="w-4 h-4"><use href="#arrow-2"></use></svg>
                            <data value="36.8" className="text-sm font-semibold">36.8%</data>
                        </div>
                        <small className="text-xs text-teritary">vs last month</small>
                    </div>

                </div>

                <ReactECharts
                    option={option}
                    style={{ height: 350, width: "100%"}}
                />

            </div>

        </section>
    )
}
export default ProductView;