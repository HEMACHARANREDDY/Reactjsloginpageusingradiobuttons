import ResponsiveAppBar from './Appbar'
import './style.css'
export default function EXP5()
{
    return(
        <div class="parent">
        <div>
            <ResponsiveAppBar/>
            <center>
            <table class="tableform">
                    <tr>
                        <td colSpan={2} style={{backgroundColor: 'red'}}>Login Page</td>
                    </tr>
                    <tr>
                        <td> Name: </td>
                        <td> <input type="text" class="form-control" name="t1" id="UN" ></input></td>
                    </tr>
                    <tr>
                        <td> Password: </td>
                        <td> <input type="password" class="form-control" name="t2" id="UP" ></input></td>
                    </tr>
                    <tr>
                        <td>Role: </td>
                        <td>
                            <select class='form-control'>
                                <option></option>
                                <option>Admin</option>
                                <option>student</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Dept</td>
                        <td><label><input type="checkbox" name="option1" value="option1"/> CSE</label> 
                        <label><input type="checkbox" name="option1" value="option1"/> ECE</label>
                        <label><input type="checkbox" name="option1" value="option1"/> AIDS</label>
</td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}><button>login</button></td>
                    </tr>
                
            </table>
            </center>
        </div>
        </div>
    )
}