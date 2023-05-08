import { Card } from "../../node_modules/react-bootstrap/esm/index"

interface ArticleCardProps {
    article: {
        titre: string,
        date: Date,
        description: string,
        contenu: string
    }
}


export default function ArticleCard(props : ArticleCardProps) {
    return(
        <Card>
            <h2>{props.article.titre}</h2>
            <h4>{props.article.description}</h4>
            <p>{props.article.date.toString()}</p>
            <div dangerouslySetInnerHTML={{ __html: props.article.contenu }}></div>
        </Card>
    )
}