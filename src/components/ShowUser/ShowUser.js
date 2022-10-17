import React from "react";
import { useSelector } from "react-redux";
import Style from "./ShowUser.module.css"
const ShowUser = () => {
  const usersData = useSelector((state) => state.user)
  return (
    <div className="bg-light">
      <table className="table table-striped table-hover">
        <thead>
          <tr className={Style.text_align}>
            <th scope="col">عملیات</th>
            <th scope="col">محل زندگی</th>
            <th scope="col">تاریخ تولد</th>
            <th scope="col">قد</th>
            <th scope="col">سن</th>
            <th scope="col">نام خانوادگی</th>
            <th scope="col">نام</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((value, index) => {
            return <>
              <tr className={Style.text_align}>
                <td>
                  <div class="btn-group">
                    <button type="button" className="btn btn-danger btn-sm">حذف</button>
                    <button type="button" className="btn btn-warning btn-sm">ویرایش</button>
                  </div>
                </td>
                <td>{value.city}</td>
                <td>{value.birthday}</td>
                <td>{value.size}</td>
                <td>{value.age}</td>
                <td>{value.family}</td>
                <td>{value.name}</td>
              </tr>
            </>
          })
          }
        </tbody>
      </table>
    </div>
  )
}
export default ShowUser;