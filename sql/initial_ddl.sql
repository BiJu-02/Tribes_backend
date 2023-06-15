CREATE DATABASE tribe_legacy;
USE tribe_legacy;
CREATE TABLE tribes(t_id INT AUTO_INCREMENT, t_name VARCHAR(30), popl INT, PRIMARY KEY (t_id));
CREATE TABLE problems(prob_id INT AUTO_INCREMENT, prob_type VARCHAR(20), PRIMARY KEY(prob_id));
CREATE TABLE specialization(sp_id INT AUTO_INCREMENT, sp_type VARCHAR(20), PRIMARY KEY(sp_id));
CREATE TABLE states(s_id INT AUTO_INCREMENT, s_name VARCHAR(20), PRIMARY KEY(s_id));
CREATE TABLE lang(lang_id INT AUTO_INCREMENT, lang_name VARCHAR(20), PRIMARY KEY(lang_id));
CREATE TABLE organization(org_id INT AUTO_INCREMENT, org_name VARCHAR(20), PRIMARY KEY(org_id));
CREATE TABLE provision(prov_id INT AUTO_INCREMENT, prov_type VARCHAR(20), PRIMARY KEY (prov_id));
CREATE TABLE tribe_problem(t_id INT, prob_id INT, prob_desc VARCHAR(100), FOREIGN KEY (t_id) REFERENCES tribes(t_id) ON DELETE CASCADE, FOREIGN KEY (prob_id) REFERENCES problems(prob_id) ON DELETE CASCADE);
CREATE TABLE tribe_special(t_id INT, sp_id INT, FOREIGN KEY (t_id) REFERENCES tribes(t_id) ON DELETE CASCADE, FOREIGN KEY (sp_id) REFERENCES specialization (sp_id) ON DELETE CASCADE);
CREATE TABLE tribe_states(t_id INT, s_id INT, FOREIGN KEY (t_id) REFERENCES tribes(t_id)  ON DELETE CASCADE, FOREIGN KEY (s_id) REFERENCES states (s_id)  ON DELETE CASCADE);
CREATE TABLE tribe_languages(t_id INT, lang_id INT, FOREIGN KEY (t_id) REFERENCES tribes(t_id) ON DELETE CASCADE, FOREIGN KEY (lang_id) REFERENCES lang (lang_id) ON DELETE CASCADE);
CREATE TABLE tribe_provision(t_id INT, org_id INT, prov_desc VARCHAR(100), FOREIGN KEY (t_id) REFERENCES tribes(t_id) ON DELETE CASCADE, FOREIGN KEY (org_id) REFERENCES organization(org_id) ON DELETE CASCADE);