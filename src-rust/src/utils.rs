use serde::de::DeserializeOwned;
use std::{ffi::CString, mem::ManuallyDrop};

pub fn cstr_to_type<T: DeserializeOwned>(cstr: *mut i8) -> Result<T, serde_json::Error> {
    let cstr = ManuallyDrop::new(unsafe { CString::from_raw(cstr) });
    serde_json::from_str(cstr.to_str().unwrap())
}
