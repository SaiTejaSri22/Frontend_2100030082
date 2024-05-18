// src/components/styles.js

import styled from 'styled-components';

export const Styles = styled.div`
  padding: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    font-family: Arial, sans-serif;
    background-color: #fff; /* Set background color for the table */

    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
    }

    th {
      background-color: #4caf50;
      color: white;
      border-right: 1px solid #ddd;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #ddd;
    }

    tr:last-child {
      border-bottom: 1px solid black;
    }
  }

  .pagination {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin: 0 5px;
      padding: 5px 10px;
      cursor: pointer;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      outline: none;
    }

    select {
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
`;
