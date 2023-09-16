--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: poupancas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.poupancas (
    id integer NOT NULL,
    valor integer NOT NULL,
    rendimento_mensal integer NOT NULL,
    titulo character varying(50) NOT NULL,
    descricao character varying(100),
    ativo boolean DEFAULT true,
    data_deposito timestamp without time zone NOT NULL
);


--
-- Name: poupancas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.poupancas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: poupancas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.poupancas_id_seq OWNED BY public.poupancas.id;


--
-- Name: poupancas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poupancas ALTER COLUMN id SET DEFAULT nextval('public.poupancas_id_seq'::regclass);


--
-- Data for Name: poupancas; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.poupancas VALUES (2, 2, 2, 'teste2', NULL, true, '1999-06-25 00:00:00');
INSERT INTO public.poupancas VALUES (3, 3000, 2, 'poupanca simples', 'Poupanca comum da caixa', true, '2023-01-01 00:00:00');


--
-- Name: poupancas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.poupancas_id_seq', 3, true);


--
-- Name: poupancas poupancas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poupancas
    ADD CONSTRAINT poupancas_pkey PRIMARY KEY (id);


--
-- Name: poupancas poupancas_titulo_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poupancas
    ADD CONSTRAINT poupancas_titulo_key UNIQUE (titulo);


--
-- PostgreSQL database dump complete
--

