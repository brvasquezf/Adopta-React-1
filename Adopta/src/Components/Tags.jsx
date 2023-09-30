import Badge from 'react-bootstrap/Badge'

const Tags = ({text, colorBadge}) => {
  return (
    <Badge className='badge' pill bg={colorBadge}>
        {text}
    </Badge>
  )
}

export default Tags