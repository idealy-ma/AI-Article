// import ArticleForm from "../components/ArticleForm";

import ArticleForm from "../components/ArticleForm";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function ArticleAdd() {
    return(
        <>
            <div className="d-flex">
                <div>
                    <SideBar active={""}/>
                </div>
                <div className="overflow-auto other-side">
                    <NavBar />
                    <ArticleForm />
                    {/* <TableCard data={articles} columns={["id","titre","description","date","contenu"]}></TableCard> */}
                </div>
            </div>
        </>
        
    )
}