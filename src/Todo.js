import React, { useContext } from 'react'
import { ThemeContext } from "./Contexts";
import { StateContext } from './Contexts';
import { Link } from 'react-navi';
import { Card } from 'react-bootstrap';


function Todo({ title, content, currentDate, todoStatus, completedDate, todoId, short = false }) {
    const { secondaryColor } = useContext(ThemeContext);

    const { dispatch } = useContext(StateContext);

    let processedContent = content
    if (short) {
        if (content.length > 30) {
            processedContent = content.substring(0, 30) + '...'
        }
    }


    return (
        <Card>
            <Card.Body>
                <Card.Title><Link style={{ color: secondaryColor }} href={`/todo/${todoId}`}>{title}</Link>
                </Card.Title>
                <Card.Text>
                    {processedContent}
                </Card.Text>
                {short && <Link href={`/todo/${todoId}`}>View full post</Link>}

            </Card.Body>
        </Card>








    )
}

export default React.memo(Todo)