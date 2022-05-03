import { useLocation } from "react-router-dom";

function WithHOCLocation(Component) {
    const location = useLocation();

    function componentWithLocation(props){
        return (<Component {...{...props, location}}  />);
    }

    return componentWithLocation;
}

export default WithHOCLocation;