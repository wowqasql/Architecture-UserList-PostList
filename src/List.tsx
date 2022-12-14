

interface ListProps<T> {
  items: T[]
  itemRender: (item: T) => React.ReactNode
}

export default function List<T> (props:ListProps<T> ) {

  return(
    <div>
      {props.items.map(props.itemRender)}
    </div>
  )
}

