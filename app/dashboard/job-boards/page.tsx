
import ButtonWithIcon from "@/app/components/button-with-icon";
import Search from "@/app/components/search";
import JobTable from "./job-table";
import Add from "./add-job";


type employee = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
};
async function JobBoardPage() {
  const response = await fetch(
    "https://dummy.restapiexample.com/api/v1/employees"
  );

  const employees = await response.json();
  console.log(employees);

  
  return (
    <div>
      <h1 className="text-lg font-semibold">Job Boards</h1>
      <h5 className="text-sm font-normal mt-2">View and manage jobs</h5>

      <div className="flex justify-between items-center mt-4">
        <div>
          <Search placeholder="Search" />
        </div>
        <div className="flex">
          <ButtonWithIcon
            color="text-gray-900"
            bg="bg-gray-50"
            svg="/svg/sort.svg"
            text="Action"
          />
          <ButtonWithIcon
            color="text-gray-900"
            bg="bg-gray-50"
            svg="/svg/sort.svg"
            text="Sort"
          />
          <Add/>
        </div>
      </div>
      <JobTable />

      <div className="mt-3 grid grid-cols-2">
        {employees.data.map((employee: employee) => (
          <div key={employee.id} className="flex"> 
            <span>{employee.employee_name}</span>
            <span>{employee.employee_salary}</span>
            <span>{employee.employee_age}</span>
            <span>{employee.employee_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobBoardPage;