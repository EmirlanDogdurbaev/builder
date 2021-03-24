import Layout from "./components/Layout/Layout";
import "./App.css"
import PharmacyBuilder from "./components/PharmacyBuilder/PharmacyBuilder";
import PharmacyPreview from "./components/PharmacyBuilder/PharmacyPreview/PharmacyPreview";
import PharmacyControls from "./components/PharmacyBuilder/PharmacyControls/PharmacyControls";
function App() {
  return (
    <div className="App">
     <Layout>
      <h1> Pharmacy builder by Emirlan Dogdurbev</h1>
      <PharmacyBuilder >
        <PharmacyPreview />
        <PharmacyControls />
      </PharmacyBuilder>
     </Layout>
 
    </div>
  );
}

export default App;
