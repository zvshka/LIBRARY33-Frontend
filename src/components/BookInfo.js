const BookInfo = ({match}) => {

    return <div id={match.params.id}>
        {match.params.id}
        </div>
}
export default BookInfo