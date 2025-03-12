import Counter from "@/components/Counnter";

const InfoPage = async() => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("checking server");
  return (
    <div>
      <header>
        <h1>Infomation page</h1>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
};

export default InfoPage;
