import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Box } from "@mui/system"

export const SelectedFieldComponent = (props) => {

    const {handleChange , label , options,value} = props ; 

    

    return (
        <Box mt={3} width="100%">
            <label>{label} </label>
            <FormControl size="small" fullWidth>
                <select class="form-select" value={value} label={label} onChange={handleChange}>
                {
                    options.map(({ id, name }) => 
                    (
                    <option value={id} key={id}>
                    {
                        name
                    }  
                    </option>
                    ))
                }
                </select>
            </FormControl>
    </Box>
    )
}