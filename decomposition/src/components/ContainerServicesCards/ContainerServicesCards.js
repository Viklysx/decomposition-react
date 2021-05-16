export default function ContainerServicesCards(props) {
    return(
        <div className="card">
          <p className="card-item-title">{props.title}</p>
            {props.children}
        </div>
    );
}