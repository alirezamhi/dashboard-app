import React from "react";
import Style from "./ShowUser.module.css"
const ShowUser = () => {
  return (
    <div>
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
          <tr className={Style.text_align}>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-danger btn-sm">حذف</button>
                <button type="button" class="btn btn-warning btn-sm">ویرایش</button>
              </div>
            </td>
            <td>تهران</td>
            <td>1379</td>
            <td>170</td>
            <td>23</td>
            <td>محمدخانی</td>
            <td>علیرضا</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default ShowUser;