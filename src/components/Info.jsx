import { useGlobalContext } from "../context";

function Info() {
  const { address } = useGlobalContext();
  console.log(address);

  return (
    <>
      <section className="info">
        <div>
          <h5>IP Address</h5>
          <h2>{address.ip}</h2>
        </div>
        <div>
          <h5>Location</h5>
          {address.location === undefined ? (
            <h2 id="error">{address.messages}</h2>
          ) : (
            ""
          )}
          <h2>
            {address?.location?.region} {address?.location?.country}
          </h2>
        </div>
        <div>
          <h5>Timezone</h5>
          <h2>{address?.location?.timezone}</h2>
        </div>
        <div>
          <h5>Ips</h5>
          <h2>{address?.as?.name}</h2>
        </div>
      </section>
    </>
  );
}

export default Info;
