#### a11y custom dropdown selection widgets  

based on - https://github.com/microsoft/sonder-ui/tree/master/src/components/select  
more details - https://www.24a11y.com/2019/select-your-poison-part-2/  

Features:
- correct, semantic markup using ARIA attributes
- dynamic control ARIA attributes
- HOME/END key to jump start/end list options
- ESC key to hidde list options
- ENTER/SPACE key to select option
- ArrowDown/ArrowUp key to navigation
- hide list option after click outside 
- hide list option after lost focus

**Note**
Attributes must be unique for each custom-select elem 

``` label.select__label(id="custom-select") for aria-labelledby="custom-select" ``` 
and
``` .select__item(id="option-1") for aria-activedescendant="option-1" ```

```
.select
	label.select__label(id="custom-select")
	.select__choice(type="text", 
		role="combox", 
		aria-labelledby="custom-select",
		aria-controls="select-list", 
		aria-expanded="false",
		aria-haspopup="listbox", 
		aria-activedescendant="option-1", 
		aria-autocomplete="none",
		tabindex="0") 1 elem
	.select__list(id="select-list", role="listbox", tabindex="-1")
		.select__item(id="option-1", role="option", aria-selected="true") 1 elem
		.select__item(id="option-2", role="option", aria-selected="false") 2 elem
		.select__item(id="option-3", role="option", aria-selected="false") 3 elem
		.select__item(id="option-4", role="option", aria-selected="false") 3 elem
		.select__item(id="option-5", role="option", aria-selected="false") 3 elem
```