import { getPostData } from "@/lib/posts"
import "./local.css"

export default async function education() {
    const postData = await getPostData('projects');
    const htmlData = postData['contentHtml'];
    console.log(htmlData)
    return (
        <div id='articleContent' dangerouslySetInnerHTML={{__html: htmlData}}></div>
    )
}
