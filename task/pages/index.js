import Layout from "../components/Layout";
import { fetchData } from "../utilityFunctions/api";

export default function Home({data}) {
    return (
        <Layout></Layout>
    )
}


export async function getStaticProps() {
    const data = await fetchData()
    return {
        props :{
            data
        }
    };
}