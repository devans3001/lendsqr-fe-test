import { useClickOutside } from "@/hooks/useOnClickOutside";
import { UserTableValueType } from "@/types/type";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";

interface FilterPanelProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onFilter?: (data: UserTableValueType) => void;
}

const FilterPanel = ({ isOpen, setIsOpen, onFilter }: FilterPanelProps) => {
  const { register, handleSubmit, reset } = useForm<UserTableValueType>({
    defaultValues: {
      organization: "",
      name: "",
      email: "",
      date: "",
      phone: "",
      status: "",
    },
  });

  const panelRef = useRef<HTMLDivElement>(null);

  useClickOutside(panelRef, () => setIsOpen(false));

  const handleReset = () => {
    reset();
  };

  const submitFilter = (data: UserTableValueType) => {
    if (onFilter) onFilter(data);

    // console.log("from",data)
    setIsOpen(false);
  };

  return (
    <>
      {/* <button 
        onClick={() => setIsOpen(true)}
        className="filter-trigger"
      >
        <FiFilter />
        <span>Filter</span>
      </button> */}

      <div
        className={`panel_overlay ${isOpen ? "panel_overlay--active" : ""}`}
      />

      <div
        ref={panelRef}
        className={`filter-panel ${isOpen ? "filter-panel--open" : ""}`}
      >
        <div className="filter-panel__header">
          <h2 className="filter-panel__title">Filters</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="filter-panel__close-btn"
          >
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit(submitFilter)}>
          <div className="filter-panel__content">
            <div
              onSubmit={handleSubmit(submitFilter)}
              className="filter-panel__form-group"
            >
              <label>Organization</label>
              <select {...register("organization")}>
                <option value="">Select</option>
                {["Irorun", "Lendstar", "Opay", "Palmpay", "Lapo"].map(
                  (ele) => (
                    <option value={ele.toLowerCase()} key={ele}>
                      {ele}
                    </option>
                  )
                )}
                {/* <option value="irorun">Irorun</option> */}
              </select>
            </div>

            <div className="filter-panel__form-group">
              <label>Username</label>
              <input type="text" placeholder="User" {...register("name")} />
            </div>

            <div className="filter-panel__form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" {...register("email")} />
            </div>

            <div className="filter-panel__form-group filter-panel__date-input">
              <label>Date</label>
              <input type="date" placeholder="Date" {...register("date")} />
            </div>

            <div className="filter-panel__form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone")}
              />
            </div>

            <div className="filter-panel__form-group">
              <label>Status</label>
              <select {...register("status")}>
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="blacklist">Blacklist</option>
              </select>
            </div>
          </div>

          <div className="filter-panel__actions">
            <button onClick={handleReset}>Reset</button>
            <button>Filter</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterPanel;
