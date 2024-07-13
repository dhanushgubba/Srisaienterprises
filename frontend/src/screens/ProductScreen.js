import { useParams } from "react-router-dom";

function ProductScreen(){
/* to show the data in the screen use Params i.e., from React Hooks*/
    const params = useParams();
    const {slug} = params;
    return(
        <h1>{slug}</h1>
    )

}
export default ProductScreen;