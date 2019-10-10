export default class Sponsors extends Component {

    render() {

        if(this.props.currentTier.sponsors === undefined)
        {
            return(
                <div/>
            );
        }
        else{
            <article key={this.props.currentTier.tierID}>
                <h3>{this.props.currentTier.name}</h3>
                <br/>
                {
                    this.props.currentTier.sponsors.map((sponsor) =>
                    <a key={sponsor.id} href={sponsor.url}>
                        <img src={sponsor.image} width={sponsor.width} height={sponsor.height}/>
                        <p>{sponsor.companyName}</p>
                    </a>
                )
                }

            </article>
        }
    }
}