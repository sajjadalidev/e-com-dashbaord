import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers, FaCartArrowDown } from "react-icons/fa";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  const dashboardstats = [
    {
      title: "Total Sale",
      amount: "$3434",
      icon: <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />,
      bgColor: "bg-[#fae8e8]",
      iconColor: "bg-[#fa0305]",
    },
    {
      title: "Products",
      amount: "50",
      icon: <MdProductionQuantityLimits className="text-[#fae8e8] shadow-lg" />,
      bgColor: "bg-[#fde2ff]",
      iconColor: "bg-[#760077]",
    },
    {
      title: "Seller",
      amount: "10",
      icon: <FaUsers className="text-[#fae8e8] shadow-lg" />,
      bgColor: "bg-[#e9feea]",
      iconColor: "bg-[#038000]",
    },
    {
      title: "Orders",
      amount: "54",
      icon: <FaCartArrowDown className="text-[#fae8e8] shadow-lg" />,
      bgColor: "bg-[#ecebff]",
      iconColor: "bg-[#0200f8]",
    },
  ];

  const state = {
    series: [
      {
        name: "Orders",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 75, 90],
      },
      {
        name: "Revenue",
        data: [20, 30, 40, 50, 60, 70, 75, 80, 85, 90, 80, 85],
      },
      {
        name: "Sellers",
        data: [30, 40, 50, 60, 70, 80, 90, 100, 90, 95, 65, 75],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: ["smooth", "straight", "stepline"],
        show: true,
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 566,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: `550px`,
            },
          },
        },
      ],
    },
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {dashboardstats.map(
          ({ icon, title, amount, bgColor, iconColor }, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-5 ${bgColor} rounded-md gap-3`}
            >
              <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                <h2 className="text-3xl font-bold">{amount}</h2>
                <span className="text-md font-medium">{title}</span>
              </div>
              <div
                className={`w-[40px] h-[47px] rounded-full ${iconColor} flex justify-center items-center text-xl`}
              >
                {icon}
              </div>
            </div>
          )
        )}
      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#d0d2d6] pb-3">
                Recent Seller Message
              </h2>
              <Link className="text-sm font-semibold text-[#dod2d6]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-l border-slate-600 ml-4">
                {[1, 2, 3].map((item, index) => (
                  <li className="mb-3 ml-6" key={index}>
                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 bg-[#4c7fe2] rounded-full p-[6px] z-10">
                      <img
                        className="w-full rounded-full h-full shadow-lg"
                        src="/images/admin.png"
                        alt="icon"
                      />
                    </div>
                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <Link className="text-md font-normal text-[#d0d2d6]">
                          Admin
                        </Link>
                        <time className="text-sm mb-1 font-normal sm:order-last sm:mb-0">
                          2 days ago
                        </time>
                      </div>
                      <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-x-slate-800">
                        Hoe Are You?
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#d0d2d6] pb-3">
            Recent Orders
          </h2>
          <Link className="text-sm font-semibold text-[#d0d2d6]">View All</Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2b6] uppercase border-b border-slate-700">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 pl-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 pl-4">
                  Price
                </th>
                <th scope="col" className="py-3 pl-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 pl-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 pl-4">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((item, i) => (
                <tr key={i}>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    #34344
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    $454
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <Link>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
