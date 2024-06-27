import Card from "./component/Card";
export default function App() {
  
  let myObj = [
    {
      profileName :"anuj sharma",
      profileDetalis : "Specialist Software Engineer"
    },
    {
      profileName : "kapil sharma",
      profileDetalis : "Team Leader"
    }
  ]

  myObj.forEach(profileObj => {
    // for (let value in profileObj) {
    //     console.log(`${profileObj[value]}`)
    // }
  })

  return (
    <>
      <Card profileName="Anuj Sharma" profileDetalis="Specialist Software Engineer"></Card>
      <Card profileName="Kapil Sharma" profileDetalis="Team Leader"></Card>
    </>
  );
}
