import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div
    className="w-full text-sm text-left"
    onWheel={handleOnWheel}
    ref={ref}
    {...props}
  />
));

const PaymentRequests = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="p-2 w-[25%] font-medium whitespace-nowrap">
          {index + 1}
        </div>
        <div className="p-2 w-[25%] whitespace-nowrap text-white">$2334</div>
        <div className="p-2 w-[25%] whitespace-nowrap">
          <span className="py-[1px] bg-slate-300 px-[5px] rounded-md text-sm text-blue-500">
            Pending
          </span>
        </div>
        <div className="p-2 w-[25%] whitespace-nowrap">12, June , 2024</div>
        <div className="p-2 w-[25%] whitespace-nowrap">
          <button className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-[2px] cursor-pointer text-white text-sm rounded-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">
          Withdrawal Request
        </h2>

        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#a7a3de] uppercase text-xs font-bold min-w-[340px] rounded-md">
              <div className="p-2 w-[25%]">No</div>
              <div className="p-2 w-[25%]">Amount</div>
              <div className="p-2 w-[25%]">Status</div>
              <div className="p-2 w-[25%]">Date</div>
              <div className="p-2 w-[25%]">Action</div>
            </div>
          </div>
        </div>
        {
          <List
            style={{ miniWidth: "340px" }}
            className="List"
            height={450}
            itemCount={100}
            itemSize={35}
            outerElementType={outerElementType}
            onWheel={handleOnWheel}
          >
            {Row}
          </List>
        }
      </div>
    </div>
  );
};

export default PaymentRequests;
