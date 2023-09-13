export default function ActionFilterButton(props)
{
    const {labelButton } = props
    const {currentFilter} = props
    return (
        <li>
            <a className={labelButton === currentFilter ? 'selected' : ''}>{labelButton}</a>
        </li>
    )
}