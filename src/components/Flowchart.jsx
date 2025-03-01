const Flowchart = () => {
  return (
    <div className="mx-auto px-4 lg:px-20 py-10 lg:py-20">

      <h2 className="font-bold  text-center">
        Flow Chart
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-10 p-10">

        <div className="text-center py-14 border border-secondary bg-bg-cards raduis-flowchart p-4 flex flex-col items-center">
          <i className="ri-wallet-line"></i>
          <p>User Connects Wallet</p>
        </div>

        <div className="text-center border py-14 border-secondary bg-bg-cards raduis-flowchart p-4 flex flex-col items-center">
          <i className="ri-building-4-line"></i>
          <p>Tracking Interactions</p>
        </div>

        <div className="text-center border py-14 border-secondary bg-bg-cards raduis-flowchart p-4 flex flex-col items-center">
          <i className="ri-android-line"></i>
          <p>Data Collecting APIs</p>
        </div>

        <div className="text-center border py-14 border-secondary bg-bg-cards raduis-flowchart p-4 flex flex-col items-center">
          <i className="ri-database-2-line"></i>
          <p>Data Storage Database</p>
        </div>

        <div className="text-center border py-14 border-secondary bg-bg-cards raduis-flowchart md:col-span-2 md:col-start-2 p-4 flex flex-col items-center">
          <i className="ri-pages-fill"></i>
          <p>Blockchain Activity Analysis</p>
        </div>

        <div className="text-center border py-14 border-secondary bg-bg-cards raduis-flowchart md:col-start-2 p-4 flex flex-col items-center">
          <i className="ri-file-transfer-fill"></i>
          <p>Transaction</p>
        </div>

        <div className="text-center border py-14 border-secondary bg-bg-cards raduis-flowchart flex flex-col items-center p-4">
          <i className="ri-verified-badge-fill"></i>
          <p>Receipt</p>
        </div>

      </div>
    </div>
  )
}
export default Flowchart;