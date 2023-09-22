import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;
  return (
    <div className="card card-compact  shadow-xl bg-slate-200 ">
      <figure>
        <img className="mt-5" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-xl text-start ">{company_name}</p>
        <div className="flex space-x-4">
          <button className="btn btn-outline btn-sm btn-primary">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-sm btn-primary">
            {job_type}
          </button>
        </div>
        <div className="flex my-3 space-x-5">
          <div>
            <h2 className="flex">
              <IoLocationOutline className="text-lg mr-1"></IoLocationOutline>
              {location}
            </h2>
          </div>

          <div>
            <h2 className="flex">
              <AiOutlineDollar className="text-lg mr-1"></AiOutlineDollar>
              <span>Salary: {salary}</span>
            </h2>
          </div>
        </div>

        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
