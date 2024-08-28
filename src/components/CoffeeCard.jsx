import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  //   console.log(coffee);
  const { _id, name, quantity, supplier,  photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your coffee has been deleted.",
                  icon: "success"
                });
            const remaining = coffees.filter(coffee => coffee._id !== _id);
            setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-4">
        <figure>
          <img className="w-60" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full">
          <div className="ml-8">
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{supplier}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item bg-[#D2B48C]">view</button>
              <Link to={`/updateCoffee/${_id}`} className="btn join-item bg-green-400 ">edit</Link>
              <button
                className="btn join-item bg-red-400"
                onClick={() => handleDelete(_id)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.bool,
  setCoffees: PropTypes.bool,
};
