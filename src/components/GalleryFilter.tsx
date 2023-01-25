import React from "react";

import "../css/filter.css";

type GalleryFilterProps = {
  onFilterChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  onViralCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userSelected: boolean,
  topSelected: boolean,
  filterOptions: any,
}
export const GalleryFilter = (props: GalleryFilterProps) => {
  const { onFilterChange, userSelected, topSelected, filterOptions, onViralCheck } = props;
  return (
    <div className="filter__wrapper">
      <div className="logo" />
      <div className="row">
        <div className="filter">
          <div className="filter__section">
            <label htmlFor="section">Section</label>
            <select
              id="section"
              name="section"
              onChange={e => onFilterChange(e)}
              defaultValue={filterOptions.section}
            >
              <option value="hot">Hot</option>
              <option value="top">Top</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="filter__section">
            <label htmlFor="sort">Sort by</label>
            <select
              id="sort"
              name="sort"
              onChange={e => onFilterChange(e)}
              defaultValue={filterOptions.sort}
            >
              <option value="viral">Viral</option>
              <option value="top">Top</option>
              <option value="time">Time</option>
              {userSelected && <option value="rising">Rising</option>}
            </select>
          </div>
          <div className="filter__section">
            <label htmlFor="section">Window</label>
            <select
              id="window"
              name="window"
              onChange={e => onFilterChange(e)}
              defaultValue={filterOptions.window}
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className="filter__section">
            <label htmlFor="section">Viral</label>
            <input type="checkbox" id="viral" name="viral" onChange={e => onViralCheck(e)}
              defaultChecked={filterOptions.viral}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
