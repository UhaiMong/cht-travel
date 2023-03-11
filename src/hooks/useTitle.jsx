import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Cht Travel`;
    }, [title])
};
export default useTitle;