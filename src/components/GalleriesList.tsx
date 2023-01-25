import React, { Component, useEffect, useState } from "react";

import "../css/galleriesList.css";
import { asyncGetGalleries } from "../actions/galleries";
import { changeFilter } from "../actions/filter";
import { GalleryFilter } from "./GalleryFilter";
import Post from "./Post";

import { useAppDispatch, useAppSelector } from "../store";
import { useDispatch } from "react-redux";

const GalleriesList = () => {
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [listEnd, setListEnd] = useState(false);
  const [list, setList] = useState(Array<any>(0));
  const [perPage, setPerPage] = useState(40);
  const [userSelected, setUserSelected] = useState(false);
  const [topSelected, setTopSelected] = useState(false);
  const [load, setLoad] = useState(false);
  const [useFilter, setUseFilter] = useState(true);

  const wholeList = useAppSelector(state => state.galleriesList)
  const filter = useAppSelector(state => state.galleriesFilter)

  const dispatch = useAppDispatch();
  const getGalleries = (params: any) => dispatch(asyncGetGalleries(params));
  const updateFilter = (params: any) => dispatch(changeFilter(params));

  useEffect(() => {
    console.log('did mount')
    getGalleries(filter);
    window.addEventListener("scroll", infinityScroll);
    return () => {
      window.removeEventListener("scroll", infinityScroll);
    }
  }, [])

  useEffect(() => {
    setLoad(false);
    loadNextGalleries();
  }, [wholeList]);

  
  const infinityScroll = () => {
    const { pageYOffset } = window;
    const {
      documentElement: { clientHeight, scrollHeight }
    } = document;
    const scrollTop = pageYOffset || document.documentElement.scrollTop;
    if (clientHeight + scrollTop >= scrollHeight && !load && listEnd) {
      updateFilter({ page: page + 1 });
      setPage(page + 1);
      setLoad(true);
      setListEnd(false);
      setCurrentPage(currentPage + perPage);
    } else if (clientHeight + scrollTop >= scrollHeight && !load && !listEnd) {
      loadNextGalleries(true);
    }
  }

  const onFilterChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const select = event.currentTarget;
    const option = select.options[select.selectedIndex];
    setCurrentPage(0);
    setLoad(true);
    setUseFilter(true);
    setPage(0);
    updateFilter({
      [select.name]: option.value,
      page: 0
    });
    if (select.name === "section") {
      option.value === "user"
        ? setUserSelected(true)
        : setUserSelected(false)
      option.value === "top"
        ? setTopSelected(true)
        : setTopSelected(false)
    }
  }
  const onViralCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const select = event.currentTarget;
    const option = select.checked;
    setCurrentPage(0);
    setLoad(true);
    setUseFilter(true);
    setPage(0);
    console.log({option})
    updateFilter({
      'viral': option,
      page: 0
    });
  }

  const loadNextGalleries = (nextPage = false) => {
    let currentNextPage;
    if (currentPage + perPage >= wholeList.length) {
      setListEnd(true);
      currentNextPage = currentPage;
    } else {
      currentNextPage = currentPage + perPage;
      setListEnd(true);
    }
    if (useFilter) {
      window.scrollTo(0, 0);
      setList([
        ...wholeList.slice(
          currentPage,
          currentPage + perPage
        )
      ])
      setCurrentPage(currentNextPage);
      setUseFilter(false);
    } else {
      setList([
        ...list,
        ...wholeList.slice(
          currentPage,
          currentPage + perPage
        )
      ])
      setCurrentPage(currentNextPage);
    }
  }

  useEffect(() => {
    getGalleries(filter);
  }, [filter])

  return (
    <div className="row gallery-list">
      <GalleryFilter
        filterOptions={filter}
        onFilterChange={onFilterChange}
        userSelected={userSelected}
        topSelected={topSelected}
        onViralCheck={onViralCheck}
      />
      {wholeList.length ? (
        list.map((post, idx) => {
          return <Post key={idx} post={post} />;
        })
      ) : (
        <div id="page-preloader" className="preloader">
          <div className="loading" />
        </div>
      )}
      {load && (
        <div className="loader">
          <h3 className="loader__title">Loading...</h3>
        </div>
      )}
    </div>
  );
};

export default GalleriesList;