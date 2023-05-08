import { Card } from "../../node_modules/react-bootstrap/esm/index"

interface ArticleCardProps {
    article: {
        titre: string,
        date: Date,
        description: string,
        contenu: string,
        image: string
    }
}


export default function ArticleCard(props : ArticleCardProps) {
    return(
        <Card>
            <h2>{props.article.titre}</h2>
            <h4>{props.article.description}</h4>
            <p>{props.article.date.toString()}</p>
            <img src={props.article.image} alt={props.article.description} />
            <div dangerouslySetInnerHTML={{ __html: props.article.contenu }}></div>
        </Card>
    )
}