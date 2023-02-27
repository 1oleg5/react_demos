export default function Spase({item}) {
    return (
        <div>
            <h2>{item.mission_name}</h2>
            <p>{item.launch_year}</p>
            <p>{item.links.mission_patch_small}</p>
        </div>);
}